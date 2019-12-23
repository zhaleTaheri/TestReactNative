import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import Styles from './Styles';
export default class FooterTabsExample extends Component {
  render() {
    return (
      <Container>
        <Footer>
          <FooterTab style={Styles.FooterTab}>
            <Button>
              <Icon name="settings" />
            </Button>
            <Button>
              <Icon name="briefcase" />
            </Button>
            <Button >
              <Icon  name="information-circle" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}