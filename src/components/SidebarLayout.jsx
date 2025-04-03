// import React, { useState } from 'react';
// import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import { Layout, Menu, Avatar, Dropdown, Space, theme } from 'antd';
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   DashboardOutlined,
//   RocketOutlined,
//   DatabaseOutlined,
//   TeamOutlined,
//   SettingOutlined,
//   UserOutlined,
//   LogoutOutlined,
//   CaretDownOutlined
// } from '@ant-design/icons';

// const { Header, Sider, Content, Footer } = Layout;

// const SidebarLayout = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   const selectedKey = location.pathname === '/' ? 'dashboard' : location.pathname.substring(1);

//   const userMenu = (
//     <Menu
//       items={[
//         {
//           key: '1',
//           label: 'Profile',
//           icon: <UserOutlined />,
//         },
//         {
//           key: '2',
//           label: 'Settings',
//           icon: <SettingOutlined />,
//         },
//         {
//           type: 'divider',
//         },
//         {
//           key: '3',
//           label: 'Logout',
//           icon: <LogoutOutlined />,
//           danger: true,
//         },
//       ]}
//     />
//   );

//   return (
//     <Layout style={{ minHeight: '100vh', background: '#ffffff' }}>
//       <Sider
//         collapsible
//         collapsed={collapsed}
//         trigger={null}
//         width={250}
//         collapsedWidth={80}
//         style={{
//           background: '#ffffff',
//           boxShadow: '4px 0 10px -3px rgba(0, 0, 0, 0.1)',
//         }}
//       >
//         <div
//           style={{
//             height: 64,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderBottom: '1px solid #e2e8f0',
//           }}
//         >
//           {collapsed ? (
//             <RocketOutlined style={{ fontSize: 24, color: '#0ea5e9' }} />
//           ) : (
//             <Space align="center">
//               <RocketOutlined style={{ fontSize: 24, color: '#0ea5e9' }} />
//               <span style={{ color: '#1e293b', fontSize: 18, fontWeight: 600 }}>ModernDash</span>
//             </Space>
//           )}
//         </div>

//         <Menu
//           theme="light"
//           mode="inline"
//           selectedKeys={[selectedKey]}
//           onClick={({ key }) => navigate(`/${key}`)}
//           style={{
//             background: '#ffffff',
//             padding: '8px 0',
//           }}
//         >
//           <Menu.Item
//             key="dashboard"
//             icon={<DashboardOutlined style={{ fontSize: 18 }} />}
//             style={{ margin: '4px 0', padding: '0 16px', height: 48 }}
//           >
//             Dashboard
//           </Menu.Item>
//           <Menu.Item
//             key="analytics"
//             icon={<DatabaseOutlined style={{ fontSize: 18 }} />}
//             style={{ margin: '4px 0', padding: '0 16px', height: 48 }}
//           >
//             Analytics
//           </Menu.Item>
//           <Menu.Item
//             key="team"
//             icon={<TeamOutlined style={{ fontSize: 18 }} />}
//             style={{ margin: '4px 0', padding: '0 16px', height: 48 }}
//           >
//             Team
//           </Menu.Item>
//           <Menu.Item
//             key="settings"
//             icon={<SettingOutlined style={{ fontSize: 18 }} />}
//             style={{ margin: '4px 0', padding: '0 16px', height: 48 }}
//           >
//             Settings
//           </Menu.Item>
//         </Menu>
//       </Sider>

//       <Layout>
//         <Header
//           style={{
//             background: colorBgContainer,
//             padding: '0 24px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             borderBottom: '1px solid #e2e8f0',
//           }}
//         >
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//               className: 'trigger',
//               onClick: () => setCollapsed(!collapsed),
//               style: { fontSize: 20, color: '#64748b' },
//             })}
//           </div>

//           <Dropdown overlay={userMenu} trigger={['click']}>
//             <Space style={{ cursor: 'pointer', padding: '8px 12px', borderRadius: 8 }}>
//               <Avatar
//                 size="default"
//                 icon={<UserOutlined />}
//                 style={{ backgroundColor: '#38bdf8' }}
//               />
//               {!collapsed && (
//                 <>
//                   <span style={{ color: '#1e293b' }}>John Doe</span>
//                   <CaretDownOutlined style={{ color: '#64748b' }} />
//                 </>
//               )}
//             </Space>
//           </Dropdown>
//         </Header>

//         <Content
//           style={{
//             margin: 24,
//             padding: 24,
//             minHeight: 280,
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//           }}
//         >
//           <Outlet />
//         </Content>

//         <Footer
//           style={{
//             textAlign: 'center',
//             padding: '16px 24px',
//             background: colorBgContainer,
//             borderTop: '1px solid #e2e8f0',
//           }}
//         >
//           ©{new Date().getFullYear()} ModernDash. All rights reserved.
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default SidebarLayout;

import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Avatar, Dropdown, Space, theme } from "antd";
import {
    LayoutDashboard,
    Server,
    Settings,
    Users,
    FileText,
    Layers,
    Activity,
    User,
    LogOut,
    ChevronDown,
    MenuIcon,
    Rocket,
} from "lucide-react";

const { Header, Sider, Content, Footer } = Layout;

const SidebarLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const selectedKey =
        location.pathname === "/"
            ? "dashboard"
            : location.pathname.substring(1);

    const userMenu = (
        <Menu
            items={[
                {
                    key: "1",
                    label: "Profile",
                    icon: <User size={16} />,
                },
                {
                    key: "2",
                    label: "Settings",
                    icon: <Settings size={16} />,
                },
                {
                    type: "divider",
                },
                {
                    key: "3",
                    label: "Logout",
                    icon: <LogOut size={16} />,
                    danger: true,
                },
            ]}
        />
    );

    return (
        <Layout style={{ minHeight: "100vh", background: "#ffffff" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                trigger={null}
                width={250}
                collapsedWidth={80}
                style={{
                    background: "#ffffff",
                    boxShadow: "4px 0 10px -3px rgba(0, 0, 0, 0.1)",
                }}
            >
                <div
                    style={{
                        height: 64,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderBottom: "1px solid #e2e8f0",
                    }}
                >
                    {collapsed ? (
                        <Rocket size={24} className="text-sky-500" />
                    ) : (
                        <Space align="center">
                            <Rocket size={24} className="text-sky-500" />
                            <span
                                style={{
                                    color: "#1e293b",
                                    fontSize: 18,
                                    fontWeight: 600,
                                }}
                            >
                                ModernDash
                            </span>
                        </Space>
                    )}
                </div>

                <Menu
                    theme="light"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    onClick={({ key }) => navigate(`/${key}`)}
                    style={{
                        background: "#ffffff",
                        padding: "8px 0",
                    }}
                >
                    <Menu.Item
                        key="dashboard"
                        icon={<LayoutDashboard size={18} />}
                        style={{
                            margin: "4px 0",
                            padding: "0 16px",
                            height: 48,
                        }}
                    >
                        Dashboard
                    </Menu.Item>
                    <Menu.Item
                        key="servers"
                        icon={<Server size={18} />}
                        style={{
                            margin: "4px 0",
                            padding: "0 16px",
                            height: 48,
                        }}
                    >
                        Servers
                    </Menu.Item>
                    <Menu.Item
                        key="config"
                        icon={<Settings size={18} />}
                        style={{
                            margin: "4px 0",
                            padding: "0 16px",
                            height: 48,
                        }}
                    >
                        Config
                    </Menu.Item>
                    <Menu.Item
                        key="clusters"
                        icon={<Layers size={18} />}
                        style={{
                            margin: "4px 0",
                            padding: "0 16px",
                            height: 48,
                        }}
                    >
                        Clusters
                    </Menu.Item>
                    <Menu.Item
                        key="users"
                        icon={<Users size={18} />}
                        style={{
                            margin: "4px 0",
                            padding: "0 16px",
                            height: 48,
                        }}
                    >
                        Users
                    </Menu.Item>
                    <Menu.Item
                        key="content"
                        icon={<FileText size={18} />}
                        style={{
                            margin: "4px 0",
                            padding: "0 16px",
                            height: 48,
                        }}
                    >
                        Content
                    </Menu.Item>
                    <Menu.Item
                        key="pulse"
                        icon={<Activity size={18} />}
                        style={{
                            margin: "4px 0",
                            padding: "0 16px",
                            height: 48,
                        }}
                    >
                        Pulse
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout>
                <Header
                    style={{
                        background: colorBgContainer,
                        padding: "0 24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #e2e8f0",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {React.createElement(MenuIcon, {
                            className: "trigger",
                            onClick: () => setCollapsed(!collapsed),
                            style: {
                                fontSize: 20,
                                color: "#64748b",
                                width: 24,
                                height: 24,
                            },
                        })}
                    </div>

                    <Dropdown overlay={userMenu} trigger={["click"]}>
                        <Space
                            style={{
                                cursor: "pointer",
                                padding: "8px 12px",
                                borderRadius: 8,
                            }}
                        >
                            <Avatar
                                size="default"
                                icon={<User size={16} />}
                                style={{ backgroundColor: "#38bdf8" }}
                            />
                            {!collapsed && (
                                <>
                                    <span style={{ color: "#1e293b" }}>
                                        John Doe
                                    </span>
                                    <ChevronDown
                                        size={16}
                                        style={{ color: "#64748b" }}
                                    />
                                </>
                            )}
                        </Space>
                    </Dropdown>
                </Header>

                <Content
                    style={{
                        margin: 24,
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Outlet />
                </Content>

                <Footer
                    style={{
                        textAlign: "center",
                        padding: "16px 24px",
                        background: colorBgContainer,
                        borderTop: "1px solid #e2e8f0",
                    }}
                >
                    ©{new Date().getFullYear()} ModernDash. All rights reserved.
                </Footer>
            </Layout>
        </Layout>
    );
};

export default SidebarLayout;
