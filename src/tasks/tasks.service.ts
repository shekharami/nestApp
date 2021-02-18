import { Body, Injectable, Post } from '@nestjs/common';
import {Task} from './tasks.model'
import * as short from 'short-uuid' 

@Injectable()
export class TasksService {
    private tasks : Task[] = []

    // getAllTasks() : Task[]{
    //     return this.tasks
    // }

    createTask(createTaskDto){
        const { url } = createTaskDto
        const urlHash = short.generate()
        const shortUrl = short.generate()
        this.tasks.push({ url, urlHash, shortUrl })
        return {url, urlHash, shortUrl}
    }

    getUrlByHash(hash){
        
        // console.log(this.tasks)
        const result = this.tasks.filter( urlObj => urlObj.urlHash === hash)

        const url = result[0].url

        return url
    }


}
