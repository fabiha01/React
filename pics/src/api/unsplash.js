import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 0jSSpL1RxeagoGG6XTf-OyZVMlQC2E-kdUtvEyR02xA'
  }
});
