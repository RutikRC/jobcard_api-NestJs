import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateClientDto } from 'src/dto/create-client.dto';
import { UpdateClientDto } from 'src/dto/update-client.dto';
import { IClient} from 'src/interface/client.interface'
import { Model } from 'mongoose';


@Injectable()
export class ClientService {

    constructor(@InjectModel('Client') private clientModel:Model<IClient>) { }
    
    async createClient(createClientDto: CreateClientDto): Promise<IClient> {
        const newClient = await new this.clientModel(createClientDto);
        return newClient.save();
    }

    async updateClient(clientId: string, updateClientDto: UpdateClientDto): Promise<IClient> {
        const existingClient = await this.clientModel.findByIdAndUpdate(clientId, updateClientDto, {
            new: true
        });
        if(!existingClient){
            throw new NotFoundException('Client not found');
        }
        return existingClient;
    }

    async getAllClients(): Promise<IClient[]> {
        const clientData = await this.clientModel.find();

        if(!clientData || clientData.length == 0){
            throw new NotFoundException('Client not found');
        }
        return clientData;
    }

    async getClient(ClientId: string): Promise<IClient> {
        const existingClient = await this.clientModel.findById(ClientId).exec();
        if(!existingClient) {
            throw new NotFoundException('Client not found');
        }
        return existingClient;
    }

    async deleteClient(ClientId: string): Promise<IClient> {
        const deletedClient = await this.clientModel.findByIdAndDelete(ClientId);
        if (!deletedClient) {
            throw new NotFoundException('Client not found');
        }
        return deletedClient;
    }
}
