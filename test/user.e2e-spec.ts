import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';

describe ('User and Authentication Module Tests (e2e)', () => {
  let token: string; // string
  let userId: number; // number
  let app: INestApplication;

  beforeAll (async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule ({
    imports: [
      TypeOrmModule.forRoot ({
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
      })
    ],
  }).compile ();
  
  app = moduleFixture.createNestApplication ();
  await app.init (); 
});
  
  afterAll (async () => {
    await app.close ();
  })
  
  it ('01 - should register a new user', async () => {
    const resposta = await request (app.getHttpServer ())
    .post ('/user/sign_up')
    .send({
      name: 'root',
      username: 'rootroot',
      email: 'root@root.com',
      password: 'rootroot',
      foto: ' '
    });
    expect (201)
    userId = resposta.body.id;
  })

  it ('02 - should authenticate a new user (login)', async () => {
    const resposta = await request (app.getHttpServer())
    .post('/auth/sign_in')
    .send({
      username: 'rootroot',
      password: 'rootroot'
    });
    expect (200)

    token = resposta.body.token
  });
  
  it ('03 - should not register the same user', async () => {
    request(app.getHttpServer())
    .post ('/user/sign_up')
    .send({
      name: 'root',
      username: 'root@root.com',
      email: 'root@root.com',
      senha: 'rootroot',
      foto: ' '
    })
    expect (400)
  })
  
  it ('04 - should list all users', async () => {
    request(app.getHttpServer())
    .get('/user/all')
    .set('Authorization', `${token}`)
    .set({})
    expect (200)
  })

  it ('05 - should update user', async () => {
    request(app.getHttpServer())
    .put ('/user/update')
    .set('authorization', `${token}`)
    .send ({
      id: userId,
      name: 'root',
      username: 'root@root.com',
      email: 'root@root.com',
      senha: 'rootroot',
      foto: ' '
    })
  
  .then (resposta => {
    expect ('Root Atualizado').toEqual(resposta.body.name)
  })
  expect (200)
  })
});