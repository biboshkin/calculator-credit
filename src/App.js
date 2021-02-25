import "antd/dist/antd.css";
import { Layout, Typography, Row, Col,  } from "antd";
import { Calculator } from "./components";

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <Header style={{ height: 'auto' }}>
            <Typography.Title style={{ color: "whitesmoke" }}>
              Расчёт параметров кредита
            </Typography.Title>
          </Header>
          <Content>
            <Row>
              <Col span={8} offset={8}>
                <Calculator />
              </Col>
            </Row>
          </Content>
        </Layout>
      </header>
    </div>
  );
}

export default App;
