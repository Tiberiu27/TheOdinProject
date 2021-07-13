const myAPIKey = '6f809f46697fb4b58b70692a0acc8d01';

const loadData = (() => {

    const fetchData = async (location) => {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${myAPIKey}`, {mode: 'cors'});
            const data = await response.json();
            return data;

        } catch (err) {
            console.log(`Oops! ${err}`);
        }
    };

    return {
        fetchData
    }

})();



export default loadData;