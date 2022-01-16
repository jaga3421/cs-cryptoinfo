import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Layout, Space, Typography } from 'antd';

import { 
    Navbar,
    Homepage,
    Cryptocurrencies,
    Cryptodetails,
    Exchanges,
    News
} from './components';

import './App.css';

const App = () => {
    return(
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                        </Routes>
                        <Routes>
                            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                        </Routes>
                        <Routes>
                            <Route exact path="/crypto/:coinID" element={<Cryptodetails />} />
                        </Routes>
                        <Routes>
                            <Route exact path="/exchanges" element={<Exchanges />} />
                        </Routes>
                        <Routes>
                            <Route exact path="/news" element={<News />} />
                        </Routes>
                    </div>
                </Layout>

                <div className='footer'>
                    <Typography.Title level={5} style={{'color': '#fff', 'textAlign': 'center'}}>
                        &copy; 2022, Cryptoverse <br></br>
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App;