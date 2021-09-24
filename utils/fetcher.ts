export type GQLResponse<T> = { data: T }

async function defaultResolver<T>(res: Response) {
  if (res.ok) return (await res.json()) as Promise<T>

  const err = await res.text()
  return Promise.reject(new Error(err))
}

export function gqlClient<T>(
  query: string,
  variables: Record<string, unknown> = {}
) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then(defaultResolver) as Promise<GQLResponse<T>>
}

export function restClient(
  endpoint: string,
  { body, ...config }: RequestInit = {}
) {
  const finalConfig: RequestInit = {
    method: body ? 'POST' : 'GET',
    body,
    ...config,
    headers: {
      'Content-Type': 'application/json',
      ...config.headers,
    },
  }

  return fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`,
    finalConfig
  ).then(defaultResolver)
}
