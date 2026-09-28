import {defineJudge, type JudgeResult} from '@trapstreet/sdk';
import {readText} from '@trapstreet/sdk/files';

export default defineJudge(async function judgeCase({input, output}): Promise<JudgeResult> {
  if (input.status !== 'available' || output.status !== 'available') {
    throw new Error('Required file evidence is unavailable');
  }

  const expected = (await readText(input.data.directory, 'expected.txt')).trim();
  const actual = (await readText(output.data.directory, 'answer.txt')).trim();

  return {
    type: 'score',
    value: actual === expected ? 100 : 0,
    extra_data: {actual}
  };
});
