const initialState = {
  1: {
    id: 1,
    title: "Learning Javascript",
    content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt, tellus eu maximus blandit, magna ante tempus metus, quis sodales justo leo sit amet nisl. Quisque at enim eget eros sodales sodales nec mollis lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec posuere metus vitae faucibus congue. Sed quis massa ut lorem dignissim aliquet quis id elit. Maecenas vestibulum tellus a elit feugiat, eu mattis risus accumsan. Vivamus sed nunc purus. Nulla in massa sapien. Donec aliquet massa ut erat porttitor maximus. Mauris rutrum malesuada imperdiet. In hac habitasse platea dictumst. Vestibulum rutrum felis nisl, ut sollicitudin risus cursus vel. Phasellus nec erat bibendum massa bibendum commodo. Nunc dui mi, consequat vitae risus vel, vestibulum tempor nunc.

Integer justo ex, lobortis sodales pharetra vel, scelerisque sit amet neque. Donec sed dictum urna. In et sapien maximus, ullamcorper nisi vitae, convallis arcu. Sed sollicitudin volutpat nisi, id auctor leo consequat non. Fusce imperdiet velit mi, vitae eleifend neque rhoncus quis. Etiam non mi consectetur, vehicula ante in, volutpat leo. Duis viverra nisi id lacus commodo, sed feugiat orci cursus. Suspendisse tempor metus ac neque iaculis, at ultricies ipsum vehicula. Quisque vitae vehicula justo. Suspendisse mauris nisl, tincidunt sit amet cursus ac, fringilla in sapien. Morbi condimentum odio at egestas faucibus. Nunc dignissim sapien vitae velit blandit condimentum. Aliquam vitae pellentesque massa. Pellentesque elementum metus a massa scelerisque ornare. Vestibulum eget arcu eget velit rutrum eleifend. Quisque sit amet tortor quis metus placerat consequat vitae a leo. `
  }
};

export default function postsReducer(state = initialState, _action) {
  return state;
}

export const postSelectors = {
  post: id => state => state.posts[id],
  posts: state => state.posts,
};
