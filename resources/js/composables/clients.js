import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default function useClients() {

    // ref is an object that is used for reactivity
    const client = ref([]);
    const clients = ref([]);

    const errors = ref('');
    const router = useRouter();

    const getClients = async () => {
        let response = await axios.get('/api/clients');
        console.log(response);
        clients.value = response.data.data;
        console.log(clients.value);
    };

    const showClient = async (id) => {
        let response = await axios.get('/api/clients/${id}');
        clients.value = response.data.data;
    }

    const storeClient = async (data) => {
        errors.value = '';
        try {
            await axios.post('/api/clients', data);
            await router.push({ name: 'clients.index' });
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    };

    const updateClient = async (id) => {
        errors.value = '';
        try {
            await axios.patch('/api/clients/${id}', client.value);
            await router.push({ name: 'clients.index' });
        } catch (e) {
            if (e.response.status === 422){
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    };

    return {
        errors,
        client,
        clients,
        getClients,
        storeClient,
        showClient,
        updateClient
    }

}