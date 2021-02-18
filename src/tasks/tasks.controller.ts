import { Controller, Get, Post, Body, Put, Delete, Req, Redirect, HttpCode, Res } from '@nestjs/common';
import { request, Request,  response,  Response } from 'express';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller()
export class TasksController {
    constructor(private tasksService : TasksService ){
    }

    @Get('*')
    @HttpCode(302)
    getUrl( @Req() request: Request, @Res() response: Response ){
        const url = this.tasksService.getUrlByHash(request.url.split('/')[1])
        response.redirect(`${url}`)
    }
    
    @Post('links')
    @HttpCode(200)
    // createTask(@Body('url') url: String, @Req() request: Request){
    //     let { urlHash, shortUrl } = this.tasksService.createTask(url)
    //     shortUrl = `${request.protocol}://${shortUrl}/${urlHash}`
    //     return {url, urlHash, shortUrl}
    // }
    createTask(@Body() createTaskDto: CreateTaskDto , @Req() request: Request){
        let { url, urlHash, shortUrl } = this.tasksService.createTask(createTaskDto)
        shortUrl = `${request.protocol}://${shortUrl}/${urlHash}`
        return {url, urlHash, shortUrl}
    }
}
