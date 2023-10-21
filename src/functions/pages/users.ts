export const bgUsersAll = (locationNow: string, url: string) => {
  if (locationNow === url) {
    return {
      bg1: 'bg-white',
      bg2: 'bg-green-4',
      textColor: 'text-white',
      font: 'font-bold'
    }
  }
}
