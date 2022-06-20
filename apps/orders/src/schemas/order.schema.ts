import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false })
export class Order extends AbstractDocument {
  @Prop()
  title: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  price: number;

  @Prop()
  phoneNumber: string;

  @Prop()
  email: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
