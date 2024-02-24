import { Document } from 'mongoose'

export interface IClient extends Document {
  readonly company_name: string
  readonly gst_no: string
  readonly cash: string
  readonly phone: string
  readonly address: string
}