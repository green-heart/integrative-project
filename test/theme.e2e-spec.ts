import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as request from 'supertest';

describe('Testes dos Módulos dos temas (e2e)', () => {

  let token: any;
  let usuarioId: any;
  let app: INestApplication;
  let temaId: any
  
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
      photo: ''
    });
    expect (201)
    usuarioId = resposta.body.id;
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
  })

  it('03 - Must Create a theme linked to the post', async () => {
      const resposta = await request(app.getHttpServer())
        .post('/theme/create')
        .send({
          classification: 'Test',
          types: 'testtest',
          posting: ''
        });
      expect(201)
      temaId = resposta.body.id;    
  });

  it ('04 - should list all theme', async () => {
      await request(app.getHttpServer())
      .get('/theme/all')
      .set('Authorization', `${token}`)
      .set({})
      expect (200)
  })

  it ('05 - should update theme', async () => {
    await request(app.getHttpServer())
    .put ('/theme/put')
    .set('Authorization', `${token}`)
    .send ({
      id: temaId,
      classification: 'Test',
      types: 'imgr.com',
      posting: ''
    })
    .then (resposta => {
    expect ('Theme Atualizado').toEqual(resposta.body.name)
    })
    expect (200)
  })

  it ('06 - should not register the same theme', async () => {
      await request(app.getHttpServer())
      .post ('/theme/create')
      .send({
        classification: 'test',
        types: 'imgr.com',
        posting: ''
        })
  })
})