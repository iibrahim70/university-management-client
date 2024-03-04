import { Layout, Menu, MenuProps } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Dashboard",
  },
  {
    key: "2",
    label: "Profile",
    children: [
      {
        key: "2.1",
        label: "Present Address",
      },
      {
        key: "2.2",
        label: "Permanent Address",
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <Layout className="min-h-dvh">
      <Sider breakpoint="lg" collapsedWidth="0">
        {/* logo option */}
        {/* <div className="bg-white rounded-s-md size-16 w-full" /> */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>

      <Layout>
        {/* header part */}
        <Header className="bg-white shadow-md rounded-md">
          <p className="flex items-center  justify-center text-xl font-bold h-full">
            University Management
          </p>
        </Header>

        {/* content part */}
        <Content className="mt-12 lg:mt-5 px-5">
          <div>
            <h1>main content should dispaly here</h1>
          </div>
        </Content>

        {/* footer part */}
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
