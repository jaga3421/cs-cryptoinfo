import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Input } from 'antd';
import millify from 'millify';

import { useGetCryptosQuery } from '../services/CryptoApi';

const Cryptocurrencies = ({simplified}) => {
    const { data: cryptosList, isFetching } = useGetCryptosQuery();
    const [ cryptos, setCryptos ] = useState(cryptosList?.data?.coins);

    useEffect(() => {
        if(simplified){
            setCryptos(cryptosList?.data?.coins.slice(0, 10));
        }
    },[])

    return (
        <>
            <Row gutter={[16, 16]} className='crypto-card-container'>
                {cryptos.map((currency) => (
                    <Col xs={24} sm={24} lg={simplified ? 8 : 6} className='crypto-card' key={currency.uuid}>
                        <Link to={`/crypto/${currency.uuid}`}>
                            <Card 
                                hoverable
                                title={`${currency.rank}: ${currency.name} (${currency.symbol})`}
                                extra={<img className='crypt-image' src={currency.iconUrl} style={{'maxWidth': '50px'}}/>}
                                style={{'borderLeft': `3px solid ${currency.color}`,'borderRadius': '5px'}}
                            >  
                                <p className='item-entry'>
                                    <span>Price</span>
                                    <span>: ${millify(currency.price)}</span>
                                </p> 
                                <p className='item-entry'>
                                    <span>Price Change</span>
                                    <span>: ${millify(currency.change)}</span>
                                </p> 
                                <p className='item-entry'>
                                    <span>Price</span>
                                    <span>: ${millify(currency.price)}</span>
                                </p> 
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies
