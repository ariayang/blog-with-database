

module.exports.checkTitle =

function (title, posts) {
    title = title.toLowerCase();
    console.log(title);
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const postObjects = Object.values(post);
        const postTitleLowerCase = postObjects[0].toLowerCase();
        //console.log(postObjects);
        // const postObjectsLowerCase = [];
        // for (let postObject of postObjects) {
        //     postObject = postObject.toLowerCase();
        //     postObjectsLowerCase.push(postObject);
        // }
        
        if (postTitleLowerCase.includes(title)) {
            return true;
        } else if (title.includes('-')) {
            title = (title.split('-')).join(' ');
            if (postTitleLowerCase.includes(title)) {
                return true;
            }
        }
    }
    return false;
  }


module.exports.formatTitle =
function (title) {
    return title;
};