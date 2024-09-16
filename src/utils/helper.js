import {adminRoutes, deliveryRoutes, financeRoutes, managerRoutes, saleRoutes, serviceRoutes} from "@/utils/routes";

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


export const checkRoleBaseNav = (role, route) => {
  if (role === "admin" && adminRoutes.includes("/en/" + route)) {
    return true
  } else if (role === "manager" && managerRoutes.includes("/en/" + route)) {
    return true
  } else if (role === "service" && serviceRoutes.includes("/en/" + route)) {
    return true
  } else if (role === "sale" && saleRoutes.includes("/en/" + route)) {
    return true
  } else if (role === "delivery" && deliveryRoutes.includes("/en/" + route)) {
    return true
  } else if (role === "finance" && financeRoutes.includes("/en/" + route)) {
    return true
  } else {
    return false
  }
}
