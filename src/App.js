import "antd/dist/antd.css";
import { Layout, Typography, Row, Col,  } from "antd";
import { Calculator } from "./components";

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <Header>
            <Typography.Title style={{ color: "whitesmoke" }}>
              Расчёт параметров кредита
            </Typography.Title>
          </Header>
          <Content style={{ height: '100vh' }}>
            <Row>
              <Col span={6} offset={8}>
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
