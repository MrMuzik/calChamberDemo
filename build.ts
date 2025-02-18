const buildProcess = new Deno.Command("deno", {
    args: ["task", "build"],
    stdout: "inherit",
    stderr: "inherit",
  });
  
  const { code } = await buildProcess.output();
  
  if (code !== 0) {
    console.error("Build process failed.");
    Deno.exit(code);
  }
  
  console.log("Build process completed successfully.");
  