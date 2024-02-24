import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { response } from 'express';
import { CreateClientDto } from 'src/dto/create-client.dto';
import { UpdateClientDto } from 'src/dto/update-client.dto';
import { ClientService } from 'src/service/client/client.service';

@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService){}

        @Post()
            async createClient(@Res() response, @Body() createClientDto: CreateClientDto) {
            try {
                const newClient = await this.clientService.createClient(createClientDto); // Ensure createClient method is defined in ClientService
                return response.status(HttpStatus.CREATED).json({
                    message: 'Client has been created successfully', newClient,});
            } catch (err) {
                return response.status(HttpStatus.BAD_REQUEST).json({
                    statusCode: 400,
                    message: 'Error: Client not created!',
                    error: 'Bad Request'
                });
            }
        }

        @Put('/:id')
        async updateClient(@Res() response, @Param('id') clientId: string, @Body() updateClientDto: UpdateClientDto) {
        try {
            const existingClient = await this.clientService.updateClient(clientId, updateClientDto);
            return response.status(HttpStatus.OK).json({
                message: 'Client has been successfully updated',existingClient,});
            } catch (err) {
                return response.status(err.status).json(err.response);
            }
        }  
        
        @Get()
        async getClient(@Res() response) {
        try {
            const clientData = await this.clientService.getAllClients();
            return response.status(HttpStatus.OK).json({
                message: 'All clients data found successfully', clientData});
            } catch (err) {
                return response.status(err.status).json(err.response);
                }
        }

        @Delete('/:id')
         async deleteClient(@Res() response, @Param('id') clientId: string){
            try {
                const deletedClient = await this.clientService.deleteClient(clientId);
                return response.status(HttpStatus.OK).json({
                    message: 'Client deleted successfully',
                    deletedClient,});
            }catch (err) {
                return response.status(err.status).json(err.response);
                }
    }
}


