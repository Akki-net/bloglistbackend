
const dummy = (blog) => {
if(blog) return 1
};

const totalLikes = (array) => {
    const reducer = (sum, item) => {
        return sum + item.likes
    };

    if(array.length > 1)
        return array.reduce(reducer, 0)
    if (array.length == 1) {
        return array[0].likes       
    } else {
        return 0        
    }
}

const favoriteblog = (array) => {
    const likes = array.map(a => a.likes);
    const max = Math.max(...likes);
    const index = array.findIndex(a => {
        if(max === a.likes)
        return a
    });
    return index + 1
}

const mostBlogs = (array) => {
    const authorList = array.map(a => a.author);
    const stats = [{author: '', blogs: 0}];
    let returnedObj = {};
    let max = -Infinity;

for(const y of authorList){
   const obj = stats.find(s => s.author === y);
   if(obj){
       obj.blogs += 1
       }
   else{
        stats.push({
            author: y,
            blogs: 1
        })
       }
    }

stats.forEach(s => {
    if(s.blogs > max){
        max = s.blogs
    }
})

returnedObj = stats.find(s => s.blogs === max);
return returnedObj;
}

const mostLikes = (array) => {
    let max = -Infinity;
    const arr = [{author: '', likes: 0}];

    for(const x of array){
        const blog = arr.find(a => a.author === x.author);

        if(blog){
            blog.likes += x.likes;
        }
        else{
            const newBlog = {
                author: x.author,
                likes: x.likes
            };
            arr.push(newBlog)
        }
    }

    arr.forEach(a => {
        if(a.likes > max)
        max = a.likes
    })

    return arr.find(a => a.likes === max)
}

module.exports = { dummy, totalLikes, favoriteblog, mostBlogs, mostLikes }
