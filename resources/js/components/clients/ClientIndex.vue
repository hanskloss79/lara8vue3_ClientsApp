<template>
    <div class="flex place-content-end mb-4 text-amber-400">
        <div class="px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-md uppercase cursor-pointer">
            <router-link :to="{ name: 'client.create' }" class="text-sm font-medium">Dodaj nowego klienta</router-link>
        </div>
    </div>

    <div class="overflow-hidden overflow-x-auto min-w-min align-middle sm:rounded-md">
        <table class="min-w-min divide-gray-800">
            <thead class="bg-amber-400">
                <tr>
                    <th class="px-6 py-3 text-black">
                        <span
                            class="text-xs font-medium bg-gray-600 tracking-wider leading-4 text-left text-black uppercase">Imię i nazwisko</span>
                    </th>
                    <th class="px-6 py-3  text-black">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-black uppercase">Email</span>
                    </th>
                    <th class="px-6 py-3 ">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-black uppercase">Adres</span>
                    </th>
                    <th class="px-6 py-3 ">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-black uppercase">Strona</span>
                    </th>
                    <th class="px-6 py-3 ">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-black uppercase">Akcja</span>
                    </th>
                </tr>
            </thead>

            <tbody class="bg-amber-100 divide-y divide-gray-800 divide-solid">
                <template v-for="client in clients" :key="client.id">
                    <tr class="bg-amber-100">
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap w-1/5">
                            {{ client.name }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap w-1/5">
                            {{ client.email }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            {{ client.address }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            {{ client.website }}
                        </td>
                        <td class="inline-flex px-6 py-4 mr-4 text-sm text-center leading-5 text-gray-900 whitespace-no-wrap">
                            <router-link :to="{ name: 'client.edit', params: { id: client.id } }"
                                class="inline-flex items-center px-4 py-2 mr-4 bg-amber-400 border border-transparent rounded-md font-semibold text-xs text-black uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                                Edytuj</router-link>
                            <button @click="deleteClient(client.id)"
                                class="inline-flex items-center px-4 py-2 ml-4 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                                Usuń
                            </button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import useClient from '../../composables/clients';
import { onMounted } from 'vue';

export default {
    setup() {
        const { clients, getClients, destroyClient } = useClient();

        onMounted(getClients);

        const deleteClient = async (id) => {
            if (!window.confirm('czy na pewno?')) {
                return;
            }
            await destroyClient(id);
            await getClients();
        }

        return {
            clients,
            deleteClient,
        }

    }
}
</script>
