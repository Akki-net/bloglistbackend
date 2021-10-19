var listHelper = require('../utils/list_helper');
var blogs = [{
    author: "Akash",
    title: "Web Development",
    description: "Never give up",
    likes: 2000
}];

test("Dummy ruturns one", function(){ 
    expect(listHelper.dummy(blogs)).toBe(1)
})



