import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as request from 'supertest';

describe('Testes dos Módulos das postagens (e2e)', () => {

    let token: any;
    let usuarioId: any;
    let app: INestApplication;
    let postagemId: any
  
    beforeAll(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [
          TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'db_greenheart_test',
            autoLoadEntities: true,
            synchronize: true,
            logging: false,
            dropSchema: true
          }),
        ],
      }).compile();
  
      app = moduleFixture.createNestApplication();
      await app.init();
  
    });
  
    afterAll(async () => {
      await app.close();
    });
    it ('01 - should register a new user', async () => {
      const resposta = await request (app.getHttpServer ())
      .post ('/user/sign_up')
      .send({
        name: 'root',
        username: 'rootroot',
        email: 'root@root.com',
        password: 'rootroot',
        photo: ' '
      });
      usuarioId = resposta.body.id;
      expect (201)
    })

    it ('02 - should authenticate a new user (login)', async () => {
      const resposta = await request (app.getHttpServer())
      .post('/auth/sign_in')
      .send({
        username: 'root@root.com',
        password: 'rootroot'
      });
      token = resposta.body.token
      expect (200)  
    })
  
    it('03 - Must Create a post linked to some theme', async () => {
      const resposta = await request(app.getHttpServer())
        .post('/posting/create')
        .send({
          text: 'Test',
          image: 'imgr.com',
          location: 'Test.rio',
          theme: '1'
        });
      postagemId = resposta.body.id;
      expect(201)
    });

    it ('04 - should list all posting', async () => {
        await request(app.getHttpServer())
        .get('/posting/all')
        .set('Authorization', `${token}`)
        .set({})
        expect (200)
      })    

    it ('05 - should update posting', async () => {
      await request(app.getHttpServer())
      .put ('/posting/put')
      .set('Authorization', `${token}`)
      .send ({
        id: postagemId,
        text: 'Test',
        image: 'imgr.com',
        location: 'Test.rio',
        theme: '1'
      })
      
      .then (resposta => {
        expect ('Postagem Atualizada').toEqual(resposta.body.name)
      })
      expect (200)
      })
    
})