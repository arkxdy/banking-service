import { injectable } from 'inversify'

export interface IDBDatasource {
    connectDb(): Promise<Boolean>
}

//@injectable()
export class MongodbDatasourceImpl implements IDBDatasource {
    connectDb(): Promise<Boolean> {
        const isConnected = new Promise<Boolean>(async (resolve, reject) => {
            try{
                const url:string = "" //config.Mongodb_url
                const connected = await this.connect(url)
                if(connected){
                    console.log('Database connected successfully.')
                    resolve(true)
                } else{
                    resolve(false)
                }
            } catch (err) {
                console.log('DB connection error:', err)
                reject(false)
            }
        })
        return isConnected
    }
    connect(url: string) {
        return true;
    }
}