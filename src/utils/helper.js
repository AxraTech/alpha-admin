export const uploadFile = async (file, fileUploadUrl, contentType) => {
  try {
    //     const fileUri = await fetch(file)
    //     const blob = await fileUri.blob()
    const uploadedImageUrl = await fetch(fileUploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': `${contentType}/*`,
        'x-amz-acl': 'public-read'
      },
      body: file
    })
    return uploadedImageUrl.url.split('?')[0]
  } catch (e) {
    alert(e)
    console.log(e)
    throw new Error(e)
  }
}
