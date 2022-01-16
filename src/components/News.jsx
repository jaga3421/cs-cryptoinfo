import React, { useState, useEffect } from 'react';
import { List, Avatar, Space, Anchor, Typography } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

import { useGetNewsQuery } from '../services/CryptoNewsApi';


const News = ({simplified}) => {
    const { data , isFetching } = useGetNewsQuery();
    const [cryptoNewsList, setCryptoNewsList] = useState(data?.value);

    if(isFetching) return 'Loading...';
    return (
        <>
             <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    pageSize: simplified ? 2 : 10,
                }}
                dataSource={cryptoNewsList}
                renderItem={(item, i) => (
                <List.Item
                    extra={
                    <img
                        width={simplified ? 100 : 200}
                        alt="logo"
                        src={item?.image?.thumbnail?.contentUrl}
                    />
                    }
                >
                    <p>{item?.name}</p>
                
                    {!simplified && item.description} 
                    <a href={item.url} target="_blank">Read More</a>
                </List.Item>
                )}
            />
        </>
    )
}



export default News
