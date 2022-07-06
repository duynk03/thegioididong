import './Product.scss';
// import axios from 'axios';
import { Image } from 'cloudinary-react';
import { List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';

const PRODUCTS_REST_API_URL = 'http://localhost:8084/tgdd/api/v1/products';
const cloudName = 'dlefvc2xe';
function Products() {
    const [initLoading, setInitLoading] = useState(true);
    // const [loading, setLoading] = useState(false);
    // const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        // axios
        //     .get(USERS_REST_API_URL, {
        //         headers: {
        //             'Access-Control-Allow-Origin': '*',
        //         },
        //     })
        fetch(PRODUCTS_REST_API_URL)
            .then((res) => res.json())
            .then((data) => {
                setInitLoading(false);
                setList(data);
                console.log(data);
            })
            .catch((error) => console.error(error));
    }, []);

    // const loadMore =
    //     !initLoading && !loading ? (
    //         <div
    //             style={{
    //                 textAlign: 'center',
    //                 marginTop: 12,
    //                 height: 32,
    //                 lineHeight: '32px',
    //             }}
    //         >
    //             <Button onClick={onLoadMore}>loading more</Button>
    //         </div>
    //     ) : null;
    return (
        <div className="product__list">
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                    // eslint-disable-next-line
                    <List.Item actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}>
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={
                                    // <Avatar >
                                    item.images.map((item, index) => {
                                        return (
                                            <Image
                                                cloudName={cloudName}
                                                publicId={item.source}
                                                style={{ with: 30, height: 30 }}
                                            />
                                        );
                                    })

                                    // </Avatar>
                                }
                                title={item.name}
                                description={item.description}
                            />
                            <div>content</div>
                        </Skeleton>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Products;
