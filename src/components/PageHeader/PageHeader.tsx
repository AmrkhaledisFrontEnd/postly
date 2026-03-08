function PageHeader({title,subtitle}:{title:string,subtitle:string}) {
  return (
     <div>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-gray-400 font-semibold">
         {subtitle}
        </p>
      </div>
  )
}

export default PageHeader
