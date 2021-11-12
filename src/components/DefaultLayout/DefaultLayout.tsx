import React, { FunctionComponent, useEffect, useMemo } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { useIntl } from "react-intl";
import { routerMeta } from 'meta';

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "components/LanguageSelector";
import { assignRouteArrayProps } from "utils";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

interface IDefaultLayoutProps {}

const defaultStyle = {
  height: "100%",
};

const menuStyle = {
  // marginLeft: 20,
  width: '100%',
  display: 'flex'
}

const defaultMenus = Object.keys(routerMeta).reduce((prev: any[], componentKey: string) => {
  const propsArr: any = assignRouteArrayProps(routerMeta[componentKey])
  const { path } = assignRouteArrayProps(routerMeta[componentKey])
  Array.isArray(propsArr)

  const getPath = (path: string) => (path.match(/\//gi) || []).length

  const pathWIthSlashLengthArr: any | any[] = Array.isArray(propsArr) ? propsArr.map(({ path }) => ({ path, length: getPath(path) })) : ({ path, length: getPath(path) })

  if (Array.isArray(pathWIthSlashLengthArr)) {
    const assignPathData = pathWIthSlashLengthArr.reduce((prevArr, { path, length }) => {
      if (length === 1) {
        return [...prevArr, { componentKey, path }]
      } else {
        return prevArr
      }
    }, [])
    return [...prev, ...assignPathData]
  } else {
    const { path, length } = pathWIthSlashLengthArr
    if (length === 1) {
      return [...prev, { componentKey, path }]
    } else {
      return prev
    }
  }
}, [])

const DefaultLayout: FunctionComponent<IDefaultLayoutProps> = (props) => {
  const { children } = props;
  const { formatMessage: fm } = useIntl();
  const location = useLocation();

  useEffect(() => {
    console.log('pathname', location.pathname)
  }, [location])

  const pathDom = useMemo(() => {
    const { pathname } = location
    const pathArray = pathname.split('/')
    const emptyToSpace = (text: string) => text === '' ? ' ' : text
    return pathArray.map(path => <Breadcrumb.Item key={path}>{emptyToSpace(path)}</Breadcrumb.Item>)
  }, [location])

  return (
    <Layout style={defaultStyle}>
      <Header className="header" style={{ display: "flex" }}>
        <div className="logo" style={{ color: "white", width: 200 }}>
          {fm({ id: "title" })}
        </div>
        <Menu theme="dark" mode="horizontal" style={menuStyle} activeKey={location.pathname} selectable={false}>
          {defaultMenus.map(({ componentKey, path }) => <Menu.Item key={path}>
            <Link to={path}>{componentKey} ({path})</Link>
          </Menu.Item>)}

          <Menu.Item key="language-selector" disabled style={{ opacity: 1, marginLeft: 'auto' }}>
            <LanguageSelector />
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        {/* <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider> */}
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {pathDom}
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
