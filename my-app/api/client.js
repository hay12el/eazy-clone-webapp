import axios from 'axios';

// export default axios.create({ baseURL: "http://10.100.102.22:3000"});
// export default axios.create({ baseURL: "http://192.168.47.12:3000"});
// export default axios.create({ baseURL: "http://10.0.0.3:3000"});
export default axios.create({ baseURL: `http://10.100.102.22:${process.env.URL}`});

///changes
