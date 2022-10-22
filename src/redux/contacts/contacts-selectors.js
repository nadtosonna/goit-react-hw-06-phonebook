export const getContacts = store => store.contacts;
export const getFilteredContacts = ({ filter, contacts }) => {
    if (!filter) {
        return contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
        const normalizedName = name.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter) || number.includes(normalizedFilter);
        return result;
    })
    return filteredContacts;
}