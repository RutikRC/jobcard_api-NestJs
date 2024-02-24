import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Client {
    @Prop()
    id: number;

    @Prop()
    company_name: string;

    @Prop({ nullable: true })
    gst_no : string;

    @Prop({ nullable: true })
    phone : string;

    @Prop({ nullable: true })
    cash: string;

    @Prop({ nullable: true })
    address: string;
    
}

export const ClientSchema = SchemaFactory.createForClass(Client);
