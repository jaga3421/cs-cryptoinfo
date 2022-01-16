import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Card } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/CryptoApi';

import { Cryptocurrencies, News } from './';

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery();
    const globalData = data?.data?.stats;

    if(isFetching) return 'Loading ...'
    return (
            <>
                <Row gutter={16, 16}>
                    <Col xs={32} sm={32} lg={16}>
                        <div className='home-heading-container'>
                            <Title level={2}>Top Cryptos</Title>
                            <Title level={5} className='show-more'>
                                <Link to="/cryptocurrencies">Show More</Link>
                            </Title>
                        </div>
                        <Cryptocurrencies simplified/>
                    </Col>   
                    <Col xs={24} sm={24} lg={8}>
                        <Row>
                            <Col xs={24} >
                                <div className='home-heading-container'>
                                    <Title level={3} className='home-title'>Latest News</Title>
                                    <Title level={5} className='show-more'>
                                        <Link to="/news">Show More</Link>
                                    </Title>
                                </div>
                                <News simplified />
                            </Col>  
                            <Col xs={24} >
                                <Card
                                    title="Cryptocurrencies Stats"
                                >
                                    <Row>
                                        <Col span={24}>
                                            <Statistic title='Total Cryptocurrencies' value={globalData.totalCoins} />
                                        </Col>
                                        <Col span={24}>
                                            <Statistic title='Total Exchanges' value={globalData.totalExchanges} />
                                        </Col>
                                        <Col span={24}>
                                            <Statistic title='Total Market cap' value={millify(globalData.totalMarketCap)} />
                                        </Col>
                                        <Col span={24}>
                                            <Statistic title='Total 24Hr volume' value={millify(globalData.total24hVolume)} />
                                        </Col>
                                        <Col span={24}>
                                            <Statistic title='Total markets' value={millify(globalData.totalMarkets)} />  
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>      
                              
                        </Row>   
                    </Col>             
                </Row>
            </>
    )
}

export default Homepage;