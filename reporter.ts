import {defineReporter, type ReporterResult} from '@trapstreet/sdk';

export default defineReporter(async function reportRun({summary}): Promise<ReporterResult> {
  if (summary.averageScore === null) {
    throw new Error('No valid Judge scores');
  }

  return {
    type: 'score',
    value: summary.averageScore,
    extra_info: `${summary.scoredCount} scored Case(s)`
  };
});
