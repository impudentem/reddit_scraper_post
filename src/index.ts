import Api from "./api";
import {updateOrCreateCategory, updateOrCreatePost} from "./orm";


const categoryName: string = "funny";

(async () => {
    let api = new Api(), category;
    category = await updateOrCreateCategory({
        name: categoryName
    });

    let resReddit = await api.get(categoryName, {
        limit: 1000
    }),
    redditPosts: Array<any> = resReddit.data.children;

    for (let i = 0; i < redditPosts.length; i++) {
        let post = redditPosts[i];
        updateOrCreatePost({
            categoryId: category.id,
            data: JSON.stringify(post.data),
            postId: post.data.id
        }).then(postDb => console.log(postDb)).catch(err => console.log(err));
    }
})();

