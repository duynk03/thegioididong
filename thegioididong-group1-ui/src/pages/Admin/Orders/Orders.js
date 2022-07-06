import axios from 'axios';
import { Image } from 'cloudinary-react';
import { useState } from 'react';
function Orders() {
    const [image, setImage] = useState('');

    const uploadImage = () => {
        const formData = new FormData();
        formData.append('file', image);
        console.log('file: ', image);
        formData.append('upload_preset', 'p7t6hcdg');

        axios.post('https://api.cloudinary.com/v1_1/dlefvc2xe/image/upload', formData).then((response) => {
            console.log(response.data.public_id);
        });
    };

    return (
        <div>
            <div>
                <input
                    type="file"
                    onChange={(e) => {
                        setImage(e.target.files[0]);
                        console.log(new Date());
                    }}
                />
                <button onClick={() => uploadImage()}>Upload</button>

                <Image cloudName="dlefvc2xe" publicId="mbc1owzl7hmzvyevak7o" />
            </div>
        </div>
    );
}

export default Orders;
