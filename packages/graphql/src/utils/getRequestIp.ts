export const getRequestIp = (req: Request) => {
  try {
    const header = req.headers.get('x-forwarded-for')

    if (!header) return undefined

    return Array.isArray(header) ? header[0].split(',')[0].trim() : header.split(',')[0].trim()
  } catch (e) {
    return undefined
  }
}
