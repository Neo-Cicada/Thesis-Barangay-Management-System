 export default async function updateItems(path, data, updateFunction, type) {
    if (data) {
        const updatePromises = [];

        Object.keys(data).forEach((key) => {
            const item = data[key];
            const count = item.count;
            const itemId = item.itemId;
            updatePromises.push(updateFunction(path, itemId, count, type)); // Pass the type to the update function
            console.log("Item Updated");
        });

        // Wait for all update promises to complete
        await Promise.all(updatePromises);

        console.log("Items Updated");
    } else {
        console.log("No items found.");
    }
}