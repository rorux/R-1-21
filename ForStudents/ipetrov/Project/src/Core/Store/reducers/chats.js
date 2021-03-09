import update from "react-addons-update";

const storeChats = {
    activeChats: {
        "0": { name:'Василий Петрович шиномонтаж', styleList: {} },
        "1": { name:'Эдуард Васильевич прачечная', styleList: {} },
        "2": { name:'Максим Евгеньевич парикмахерская', styleList: {} },
    }



/*
    activeChats: [
        {name:'Василий Петрович шиномонтаж', id: '1'}, 
        {name:'Эдуард Васильевич прачечная', id: '2'}, 
        {name:'Максим Евгеньевич парикмахерская', id: '3'}
    ]
*/
};

export default (store = storeChats, action) => {
    switch(action.type) {
        case 'LOAD_CHT': {
            return store;
        };

        case 'HGHLGHT': {
            return update(store, {
                    activeChats: {
                        [action.payload.chatId]: {
                            styleList: {
                                backgroundColor: {
                                    $set: 'yellow'}}}}})
        }

        case 'UNHGHLGHT': {
            return update(store, {
                    activeChats: {
                        [action.payload.chatId]: {
                            styleList: {
                                backgroundColor: {
                                    $set: undefined}}}}})
        }

        case 'ADD_CHT': {
            const newChat = { [action.payload.chatId]: {name: action.payload.name, styleList: {}}};
            return update(store, {
                activeChats: {
                    $merge: newChat
                }
            })
        }



        default: {
            return store;
        }
    }
};