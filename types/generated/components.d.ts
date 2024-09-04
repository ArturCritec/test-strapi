import type { Schema, Attribute } from '@strapi/strapi';

export interface TesteTeste extends Schema.Component {
  collectionName: 'components_teste_testes';
  info: {
    displayName: 'Teste';
    icon: 'chartPie';
  };
  attributes: {
    Title: Attribute.String;
  };
}

export interface TesteComponentTeste extends Schema.Component {
  collectionName: 'components_teste_component_testes';
  info: {
    displayName: 'Component teste';
    icon: 'bold';
  };
  attributes: {
    asdasd: Attribute.String;
  };
}

export interface TesteAsdasd extends Schema.Component {
  collectionName: 'components_teste_asdasds';
  info: {
    displayName: 'asdasd';
    icon: 'chartPie';
    description: '';
  };
  attributes: {
    Text: Attribute.String;
    Title: Attribute.String;
    tipologia: Attribute.Relation<
      'teste.asdasd',
      'oneToOne',
      'api::tipologia.tipologia'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'teste.teste': TesteTeste;
      'teste.component-teste': TesteComponentTeste;
      'teste.asdasd': TesteAsdasd;
    }
  }
}
