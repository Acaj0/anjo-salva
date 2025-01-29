import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const data = await resend.emails.send({
      from: "Anjo Salva <onboarding@resend.dev>",
      to: ["seu-email@exemplo.com"], // Substitua pelo seu email
      subject: "Novo Contato - Anjo Salva",
      html: `
        <h2>Novo contato do site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}

