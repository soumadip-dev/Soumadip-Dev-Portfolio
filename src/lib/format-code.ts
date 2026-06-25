import { Project, ScriptKind } from 'ts-morph';

import { fixImport } from '@/lib/registry';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function formatCode(code: string, styleName: string) {
  code = fixImport(code);

  try {
    // const config = buildDisplayConfig(styleName)
    const project = new Project({ compilerOptions: {} });
    const sourceFile = project.createSourceFile('component.tsx', code, {
      scriptKind: ScriptKind.TSX,
    });

    return sourceFile.getFullText();
  } catch (error) {
    console.error('Transform failed:', error);
    return code;
  }
}
