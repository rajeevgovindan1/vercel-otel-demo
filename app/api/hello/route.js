export async function GET(request) {
  return new Response(JSON.stringify({ message: 'hello from App Router!' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

