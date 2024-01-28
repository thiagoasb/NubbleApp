export interface PostComment {
  id: number; // 117
  message: string;
  createdAt: string; // '2023-07-24T20:38:56.192+10:00'
  createdAtRelative: string; // '1 h, 2 sem'
  author: {
    id: number; // 6
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; //107;
  message: string; //'Alter totam aliquid.';
  user_id: number; //3;
  post_id: number; //1;
  created_at: string; //'2024-01-22T15:19:19.000-03:00';
  updated_at: string; //'2024-01-22T21:06:55.024-03:00';
  // post: {
  //   id: 1;
  //   text: 'Bom dia!';
  //   user_id: 1;
  //   image_url: 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg';
  //   is_fixed: false;
  //   is_activated: true;
  //   created_at: '2024-01-22T21:06:34.441-03:00';
  //   updated_at: '2024-01-22T21:06:34.446-03:00';
  //   status: 'published';
  //   meta: {};
  // };
  user: {
    id: number; //3;
    first_name: string; //'Ana';
    last_name: string; //'Oliveira';
    username: string; //'aninha23';
    email: string; //'oliveiraana23@coffstack.com';
    profile_url: string; //'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/7-ana.png';
    is_online: boolean; //false;
    full_name: string; //'Ana Oliveira';
  };
  meta: any; //{};
}
