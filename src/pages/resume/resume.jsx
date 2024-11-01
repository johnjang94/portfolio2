export default function Resume() {
  return (
    <section>
      <p className="text-center mt-10 md:text-2xl">
        The following is my resume sample.
      </p>
      <div className="my-10">
        <iframe
          className="pdf mx-auto w-5/6 h-[450px]"
          src="/product_designer.pdf"
        ></iframe>
      </div>
      <div className="flex items-center text-center gap-1 justify-center">
        <p>Please reach out to me</p>
        <a
          href="mailto:jscolbe9675@gmail.com"
          className="text-blue-500 underline"
        >
          here
        </a>
        <p>for more information.</p>
      </div>
    </section>
  );
}
