export function slugFromPost (post) {
  const date = post.slug.substring(0, 10);
  const label = post.slug.substring(11);
  return `${date}/${label}`
}
