import { MongoClient } from "mongodb";

export function connectDb() {
  const client = new MongoClient(
    "mongodb+srv://audtlr:lNbip9a0o2BUm0u2@eating.xpihqcv.mongodb.net/?retryWrites=true&w=majority"
  );

  return client;
}

export async function findSameArray(client, userEmail, foodId) {
  const findResult = await client
    .db("eating")
    .collection("userFavorite")
    .findOne({ userEmail: userEmail });

  // foodId 는 context.params 에서 오고,
  const isSameArray = findResult.foodArray.find((id) => id === foodId);

  // 초기값만 props로 받으면, page에서, State 에 저장한 다음, 버튼은 누를때마다, 추가나 삭제로 변경
  return isSameArray;
}

export async function favoriteFoodArray(client, userEmail) {
  const findResult = await client
    .db("eating")
    .collection("userFavorite")
    .findOne({ userEmail: userEmail });

  return findResult;
}
