import {CategoryRow, PostRow} from "./interfaces";
import {openDb} from "./db";


export async function updateOrCreateCategory(data: CategoryRow): Promise<CategoryRow> {
    let db = await openDb(), res;
    await db.run('INSERT INTO Category(name) VALUES($name) ON CONFLICT(name) DO UPDATE SET name = excluded.name', {
        $name: data.name
    });
    res = await db.get<CategoryRow>('SELECT * FROM Category WHERE name = ?', data.name);
    return res;
}
export async function updateOrCreatePost(data: PostRow): Promise<PostRow> {
    let db = await openDb(), res;
    await db.run('INSERT INTO Post(categoryId, data, postId) VALUES($categoryId, $data, $postId) ON CONFLICT(postId) DO UPDATE SET categoryId = excluded.categoryId, data = excluded.data, postId = excluded.postId', {
        $categoryId: data.categoryId,
        $data: data.data,
        $postId: data.postId
    });
    res = await db.get<PostRow>('SELECT * FROM Post WHERE categoryId = ? AND postId = ?', data.categoryId, data.postId);
    return res;
}
